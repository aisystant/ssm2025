import { data } from '../../data/variables';

export function replaceFrontmatterVariables(obj: any) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            let value = obj[key];

            if (typeof value === 'string') {
                const regex = /{{\s*data\.(\w+(\.\w+)*)\s*}}/g;
                obj[key] = value.replace(regex, (match, path) => {
                    const value = getNestedValue(data, path);

                    if (value === undefined) {
                        throw new Error(`Не найдено значение переменной {{ data.${path} }}`);
                    }
                    return value;
                });
            }

            if (typeof value === 'object' && value !== null) {
                replaceFrontmatterVariables(value);
            }
        }
    }
}

function getNestedValue(obj: any, path: string) {
    const keys = path.split('.');
    let result = obj;
    for (const key of keys) {
        result = result[key];
        if (result === undefined) return undefined;
    }
    return result;
}

import { useState } from "react";

export const useInputHook = (initialValue: string): [string, (event: React.ChangeEvent<HTMLInputElement>) => void] => {
    const [value, setValue] = useState<string>(initialValue);

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(event.target.value);
    };
    return [value, onInputChange];
};
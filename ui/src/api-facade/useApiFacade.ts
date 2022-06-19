import {useMemo} from "react";
import ApiFacade from "./ApiFacade";

export const useApiFacade = (API_URL: string, token: string) => {
    return useMemo(() => {
        new ApiFacade(API_URL, token)
    }, []);
}
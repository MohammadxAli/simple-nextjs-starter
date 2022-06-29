import { IS_DEV } from "@/helpers/constants";
import { useState } from "react";
import { QueryClient } from "react-query";

const useConfigureQueryClient = () => {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        refetchOnReconnect: IS_DEV ? false : true,
                        refetchOnWindowFocus: IS_DEV ? false : true,
                        retry: (count, error: any) => {
                            if (
                                error?.response?.status === 404 ||
                                count === 3
                            ) {
                                return false;
                            }
                            return true;
                        },
                    },
                },
            })
    );
    return queryClient;
};

export default useConfigureQueryClient;

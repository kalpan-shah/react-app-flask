/**
 * @file apiService.ts
 * @author Kalpan Shah <kalpanshah025@gmail.com>
 * @since 2023-02-28
 *
 * This file contains functions that collects data making an api call
 */
/* Dependencies */
import axios from 'axios';

/* Function Definitions */
// async function get<T>(url: string): Promise<T> {
//     return (await axios.get(url)).data;
// }
const get = async <T>(url: string): Promise<T> => {
    return (await axios.get(url)).data;
}


export { get };
/* End of File */
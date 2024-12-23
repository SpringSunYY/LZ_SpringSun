import http from "@/utils";



export function getCodeImage() {
    return http.http({
        url: '/code',
    })
}

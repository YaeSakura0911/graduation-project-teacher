import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class StorageUtil {

    /**
     * 保存localstorage
     * @param key 关键字
     * @param value 保存的数据
     */
    public set(key: string, value: Object): void {
        let currentTime = new Date().getTime();
        localStorage.setItem(key, JSON.stringify({data: value, time: currentTime}));
    }

    /**
     * 读取localstorage
     * @param key 关键字
     */
    public get(key: string): any {
        let data: string | null = localStorage.getItem(key);
        if (data != null) {
            let jsonData = JSON.parse(data);
            // 超过保存时间1小时
            if (new Date().getTime() - jsonData.time > 1000*60*60) {
                this.remove(key);
                return null;
            }
            else {
                return jsonData.data;
            }
        }
    }

    /**
     * 刷新超时时间
     * @param key
     */
    public refreshTime(key: string): void {
        let data: string | null = localStorage.getItem(key);
        let currentTime = new Date().getTime();
        if (data != null) {
            let jsonData = JSON.parse(data);
            // 刷新时间
            localStorage.setItem(key, JSON.stringify({data: jsonData.data, time: currentTime}));
        }
    }

    /**
     * 删除localstorage
     * @param key 关键字
     */
    public remove(key: string): void {
        localStorage.removeItem(key);
    }
}

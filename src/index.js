function lyUrlFormat(url="") {
    if(url || window){
        let location = url ? url : window.location
        let args = {},
            urlData,
            arrData;
        if (typeof location == "object" && location.search) {
            console.log(location.search)
            urlData = location.search.slice(1);
        }
        if(typeof location == "string" && location.indexOf('?') > -1){
            urlData = location.split("?")[1];
        }
        if (location.hash && location.hash.indexOf('?') > -1) {
            urlData = location.hash.split("?")[1];
        }
        if (urlData && urlData.indexOf("&") > -1) {
            arrData = urlData.split("&");
            arrData.forEach(n => {
                if (n.indexOf("=") > -1) {
                    n = n.split("=");
                    args[n[0]] = decodeURIComponent(n[1] + "");
                } else {
                    args[n] = "";
                }
            });
        } else if (urlData && urlData.indexOf("=") > -1) {
            arrData = urlData.split("=");
            args[arrData[0]] = arrData[1];
        } else if (urlData) {
            args[urlData] = "";
        }
        return args;
    }else {
        return {}
    }
}

if(window) {
    window.lyUrlFormat = lyUrlFormat
}

export default lyUrlFormat
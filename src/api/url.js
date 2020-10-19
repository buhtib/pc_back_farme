//存放所有的公共 url

//上传图片
export const uploadImgUrl =
    process.env.NODE_ENV == "development"
        ? "http://192.168.1.170:8080/minio/upload"
        : "/minio/upload";

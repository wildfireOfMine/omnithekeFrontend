import { jwtDecode } from "jwt-decode";

const tokenInterceptor = (tokenId) => {
  if (!tokenId) {
    return true;
  } else {
    try {
        const desglosado = jwtDecode(tokenId);
        console.log(desglosado);

        return desglosado.exp * 1000 <= Date.now();
    } catch {
        return true;
    }
  }
};

export default tokenInterceptor
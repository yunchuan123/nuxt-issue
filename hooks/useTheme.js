// import { carThemeSetting } from "~/constant/default-theme.js";
import { useAsyncData } from "nuxt/app";

export default async () => {
  const { data: themeData, pending, error, refresh } = await useAsyncData('themeData', async () => {
    const response = await fetch('http:/192.168.1.103:13000/getThemeByName?themeName=carThemeSetting');
    if (!response.ok) throw new Error('Error fetching data');
    return response.json();
  });
  const headerNodes = ref([]);
  const footerNodes = ref([]);

  headerNodes.value = themeData.value.data.header;
  footerNodes.value = themeData.value.data.footer;

  return {
    headerNodes,
    footerNodes
  }
}

import { useLocalStorage } from "@vueuse/core";
import { nextTick, ref } from "vue";

export const darkmode = useLocalStorage("darkmode", true);

export const sectionIndex = ref(0);

export const setSectionIndex = (number) => {
  sectionIndex.value = number;
  nextTick();
};

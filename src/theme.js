import { ref, onMounted, computed } from 'vue';

export function userTheme() {
  const htmlRef = document.querySelector('html');
  const theme = ref(htmlRef.classList.contains('dark'));

  const isDark = computed(() => theme.value);

  onMounted(() => {
    window.matchMedia('(prefers-color-scheme: dark)').matches && toggleTheme();
  });

  const toggleTheme = () => {
    theme.value
      ? htmlRef.classList.remove('dark')
      : htmlRef.classList.add('dark');
    theme.value = htmlRef.classList.contains('dark');
  };
  return { theme, isDark, toggleTheme };
}

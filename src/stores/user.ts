import { ref, type Ref } from 'vue';
import { defineStore } from 'pinia';
import type { User } from '@/types/User';
import { ApiWrapper } from '@/composables/ApiWrapper';

export const useUserStore = defineStore('user', () => {
  const currentUser: Ref<User | null> = ref(null);
  const currentStatus: Ref<number | null> = ref(null);

  function refreshLocalStorage() {
    localStorage.setItem('user', JSON.stringify(currentUser.value || {}));
  }

  function clearUser() {
    currentUser.value = null;
    refreshLocalStorage();
    localStorage.clear();
  }

  function setJwt(token: string): void {
    currentUser.value = {
      jwt: token
    };

    refreshUserData()
    .then(refreshLocalStorage);
  }

  async function refreshUserData() {
    const res = await ApiWrapper.get<{
      _id: string;
      username: string;
      displayName: string;
    }>('user/@me', {});
    currentUser.value.data = res.data;
  }

  function loggedIn(): boolean {
    return currentUser.value != null;
  }

  function getJwt(): string | undefined {
    if (loggedIn()) return currentUser.value?.jwt;

    return;
  }

  function getUserData(): User['data'] {
    if (loggedIn()) return currentUser.value?.data;

    return undefined;
  }

  function setStatus(code: number | null): void {
    currentStatus.value = code;
  }

  function getStatus(): number | null {
    return currentStatus.value;
  }

  function clearStatus(): void {
    currentStatus.value = null;
  }

  if (currentUser.value == null) {
    const lsUser = localStorage.getItem('user');

    currentUser.value = lsUser ? JSON.parse(lsUser) : null;
  }

  return { loggedIn, getUserData, getJwt, setJwt, clearUser, getStatus, setStatus, clearStatus };
});
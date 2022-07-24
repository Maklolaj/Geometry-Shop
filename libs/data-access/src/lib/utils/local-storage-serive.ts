import { User } from '@geometry-shop/domain';

export function getUserFromLocalStorage(): User | undefined {
  {
    const user = localStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    }
    return undefined;
  }
}

import { action, makeAutoObservable, observable, runInAction } from 'mobx'

export class UsersStore {
  users = []
  page = 1
  total_pages = 0
  constructor() {
    makeAutoObservable(this, {
      users: observable,
      page: observable,
      total_pages: observable,
      getUsersList: action,
    })
  }
  getUsersList = async (loadMore: any) => {
    if (loadMore) {
      if (this.total_pages >= this.page + 1) {
        this.page++
        const response = await this.callForUsers(this.page)
        runInAction(() => {
          this.users = [...this.users, ...response.data.data]
        })
      }
    } else {
      const response = await this.callForUsers(this.page)
      runInAction(() => {
        this.total_pages = response.data.total_pages
        this.users = response.data.data
      })
    }
  }

  callForUsers = async (page: string | number) => {
    await fetch('https://reqres.in/api/users?page=' + page)
      .then(response => response.json())
      .then(data => {
        return data
      })
  }
}

export default new UsersStore()

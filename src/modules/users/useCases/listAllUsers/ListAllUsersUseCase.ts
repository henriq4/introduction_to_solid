import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id)

    if (!user) {
      throw new Error('user do not existis')
    }

    if (user.admin === false) {
      throw new Error('user need to be admin')
    }

    const users = this.usersRepository.list()

    return users
  }
}

export { ListAllUsersUseCase };

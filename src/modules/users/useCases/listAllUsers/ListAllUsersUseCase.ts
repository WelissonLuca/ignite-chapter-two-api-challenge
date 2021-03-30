import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string | string[];
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id.toString());
    if (!user) throw new Error("user not found");

    if (!user.admin === true)
      throw new Error("you dont have permission to access");

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };

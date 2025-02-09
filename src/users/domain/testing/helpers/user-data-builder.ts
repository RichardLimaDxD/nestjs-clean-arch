import { faker } from '@faker-js/faker';
import { UserProps } from '@/users/domain/entities/user.entity';

type Props = {
  name?: string;
  email?: string;
  password?: string;
  createdAt?: Date;
};

export const UserDataBuilder = (props: Props): UserProps => {
  return {
    name: props.name ?? faker.person.fullName(),
    email: props.email ?? faker.internet.email(),
    password: props.password ?? faker.internet.password(),
    createdAt: props.createdAt ?? new Date(),
  };
};

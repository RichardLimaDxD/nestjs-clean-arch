import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data-builder';
import { UserEntity, UserProps } from '../../user.entity';
import { EntityValidationError } from '@/shared/domain/errors/validation-error';

describe('User entity integration tests', () => {
  describe('Constructor method', () => {
    it('Should a valid user', () => {
      expect.assertions(0);

      const props: UserProps = {
        ...UserDataBuilder({}),
      };
      new UserEntity(props);
    });

    it('Should throw an error when creating a user with invalid name', () => {
      let props: UserProps = {
        ...UserDataBuilder({}),
        name: null,
      };
      expect(() => new UserEntity(props)).toThrowError(EntityValidationError);

      props = {
        ...UserDataBuilder({}),
        name: '',
      };
      expect(() => new UserEntity(props)).toThrowError(EntityValidationError);

      props = {
        ...UserDataBuilder({}),
        name: 10 as any,
      };
      expect(() => new UserEntity(props)).toThrowError(EntityValidationError);

      props = {
        ...UserDataBuilder({}),
        name: 'a'.repeat(256),
      };
      expect(() => new UserEntity(props)).toThrowError(EntityValidationError);
    });

    it('Should throw an error when creating a user with invalid e-mail', () => {
      let props: UserProps = {
        ...UserDataBuilder({}),
        email: null,
      };
      expect(() => new UserEntity(props)).toThrowError(EntityValidationError);

      props = {
        ...UserDataBuilder({}),
        email: '',
      };
      expect(() => new UserEntity(props)).toThrowError(EntityValidationError);

      props = {
        ...UserDataBuilder({}),
        email: 10 as any,
      };
      expect(() => new UserEntity(props)).toThrowError(EntityValidationError);

      props = {
        ...UserDataBuilder({}),
        email: 'a'.repeat(256),
      };
      expect(() => new UserEntity(props)).toThrowError(EntityValidationError);
    });

    it('Should throw an error when creating a user with invalid password', () => {
      let props: UserProps = {
        ...UserDataBuilder({}),
        password: null,
      };
      expect(() => new UserEntity(props)).toThrowError(EntityValidationError);

      props = {
        ...UserDataBuilder({}),
        password: '',
      };
      expect(() => new UserEntity(props)).toThrowError(EntityValidationError);

      props = {
        ...UserDataBuilder({}),
        password: 10 as any,
      };
      expect(() => new UserEntity(props)).toThrowError(EntityValidationError);

      props = {
        ...UserDataBuilder({}),
        password: 'a'.repeat(101),
      };
      expect(() => new UserEntity(props)).toThrowError(EntityValidationError);
    });

    it('Should throw an error when creating a user with invalid cratedAt', () => {
      let props: UserProps = {
        ...UserDataBuilder({}),
        createdAt: '2023' as any,
      };
      expect(() => new UserEntity(props)).toThrowError(EntityValidationError);

      props = {
        ...UserDataBuilder({}),
        createdAt: 10 as any,
      };
      expect(() => new UserEntity(props)).toThrowError(EntityValidationError);
    });
  });

  describe('Update name method', () => {
    it('Should a valid update user', () => {
      expect.assertions(0);

      const props: UserProps = {
        ...UserDataBuilder({}),
      };

      const entity = new UserEntity(props);
      entity.update('other name');
    });

    it('Should a invalid user using name field', () => {
      const entity = new UserEntity(UserDataBuilder({}));
      expect(() => entity.update(null)).toThrowError(EntityValidationError);
      expect(() => entity.update('')).toThrowError(EntityValidationError);
      expect(() => entity.update(10 as any)).toThrowError(
        EntityValidationError,
      );
      expect(() => entity.update('a'.repeat(256))).toThrowError(
        EntityValidationError,
      );
    });
  });

  describe('Update password method', () => {
    it('Should a valid update password user', () => {
      expect.assertions(0);

      const props: UserProps = {
        ...UserDataBuilder({}),
      };

      const entity = new UserEntity(props);
      entity.updatePassword('!Updatepassword123@');
    });

    it('Should a invalid user using password field', () => {
      const entity = new UserEntity(UserDataBuilder({}));
      expect(() => entity.updatePassword(null)).toThrowError(
        EntityValidationError,
      );
      expect(() => entity.updatePassword('')).toThrowError(
        EntityValidationError,
      );
      expect(() => entity.updatePassword(10 as any)).toThrowError(
        EntityValidationError,
      );
      expect(() => entity.updatePassword('a'.repeat(101))).toThrowError(
        EntityValidationError,
      );
    });
  });
});

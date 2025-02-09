import { validate as uuidValidate } from 'uuid';
import { Entity } from '../../entity';

type StubProps = {
  prop1: string;
  prop2: number;
};

class StubEntity extends Entity<StubProps> {}

describe('User entity unit tests', () => {
  it('Should set props and id', () => {
    const props = { prop1: 'value1', prop2: 15 };

    const entity = new StubEntity(props);

    expect(entity.props).toStrictEqual(props);
    expect(entity._id).not.toBeNull();
    expect(uuidValidate(entity._id)).toBeTruthy();
  });

  it('Should accept a valid uuid', () => {
    const props = { prop1: 'value1', prop2: 15 };
    const id = 'e483d8e5-0be1-458d-9f78-856d4906d78c';
    const entity = new StubEntity(props, id);

    expect(uuidValidate(entity._id)).toBeTruthy();
    expect(entity._id).toBe(id);
  });

  it('Should convert a entity to a javascript object', () => {
    const props = { prop1: 'value1', prop2: 15 };
    const id = 'e483d8e5-0be1-458d-9f78-856d4906d78c';
    const entity = new StubEntity(props, id);

    expect(entity.toJSON()).toStrictEqual({
      id,
      ...props,
    });
  });
});

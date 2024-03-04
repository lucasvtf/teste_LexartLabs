import { Model } from 'sequelize';

export class UserModel extends Model {
  declare id: number;
  declare name: string;
  declare password: string;
  declare email: string;
  declare readonly created_at: Date;
  declare readonly updated_at: Date;

  static notHistory: boolean;
}

module.exports = (sequelize: any, DataTypes: any) => {
  UserModel.init(
    {
      name: DataTypes.STRING,
      passoword: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      freezeTableName: true,
      modelName: 'users',
    }
  );

  UserModel.notHistory = true;

  return UserModel;
};

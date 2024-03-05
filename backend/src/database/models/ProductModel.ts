import { Model } from 'sequelize';

export class ProductModel extends Model {
  declare id: number;
  declare name: string;
  declare brand: string;
  declare model: string;
  declare color: string;
  declare price: number;
  declare readonly created_at: Date;
  declare readonly updated_at: Date;

  static notHistory: boolean;
}

module.exports = (sequelize: any, DataTypes: any) => {
  ProductModel.init(
    {
      name: DataTypes.STRING,
      brand: DataTypes.STRING,
      model: DataTypes.STRING,
      color: DataTypes.STRING,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      freezeTableName: true,
      modelName: 'products',
    }
  );

  ProductModel.notHistory = true;

  return ProductModel;
};

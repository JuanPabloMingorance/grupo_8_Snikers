module.exports = (sequelize, dataTypes) => {
    let alias = 'Brand';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING(100),
            allowNull: false
        },

    }
    let config = {
        tableName: 'brands',
        timestamps: false,

    }
    const Brand = sequelize.define(alias, cols, config)

    Brand.associate = models => {
        Brand.hasMany(models.Product, {
            as: 'productos',
            foreignKey: 'marca_id'

        })
    }
    return Brand
}
module.exports=(sequelize,dataTypes)=>{
    let alias='User';
    let cols={
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nombre: {
            type:dataTypes.STRING(100),
            allowNull:false
        },
        apellido: {
            type:dataTypes.STRING(100),
            allowNull:false
        },
        correo: {
            type:dataTypes.STRING(100),
            allowNull:false
        },
        password: {
            type:dataTypes.STRING(100),
            allowNull:false
        },
        rol_id: {
            type:dataTypes.INTEGER,
            allowNull:false
        }

    }
let config= {
    tableName:'users',
    timestamps:false,

}
const User=sequelize.define(alias,cols,config)

User.associate=models=>{
    User.belongsTo(models.Rol,{
        as:'rol',
        foreignKey:'rol_id'
    
    })
    User.belongsToMany(models.Product,{
        as:'productos',
        through:'cart_shop',
        foreignKey:'user_id',
        otherKey:'product_id',
        timestamps:false,
    })
}
return User
}
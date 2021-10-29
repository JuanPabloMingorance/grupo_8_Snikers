module.exports=(sequelize,dataTypes)=>{
    let alias='Rol';
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

    }
let config= {
    tableName:'rols',
    timestanps:false,

}
const Rol=sequelize(alias,cols,config)

Rol.associate=models=>{
    Rol.hasMany(models.User,{
        as:'usuarios',
        foreignKey:'rol_id'
    
    })
}
return Rol
}
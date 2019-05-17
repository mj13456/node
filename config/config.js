module.exports = {
  server_port : 3000,
  db_url:'mongodb://localhost:27017/local',
  db_schemas: [
    {file:'../database/user_schema', collection:'user6', schemaName:'UserSchema', modelName:'UserModel'}
  ],
  route_info: [

  ],
  facebook : {
    clientID : '566919047169307',
    clientSecret : '01180fe22607812f57a65a44a8157ff0',
    callbackURL : '/auth/facebook/callback'
},

}

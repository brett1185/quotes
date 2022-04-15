const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Must enter a name!']
    },
    email:{
        type:String, 
        required:[true, 'must enter email address'],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
            }
        },
    password:{
        type:String,
        required:[true, 'Must enter password'],
        minLength:[8, 'Password must be at least 8 characters long!']
    }
}, {timestamps:true})

// add this after UserSchema is defined
UserSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword )
    .set( (value) => this._confirmPassword = value );

    UserSchema.pre('validate', function(next) {
        if (this.password !== this.confirmPassword) {
            this.invalidate('confirmPassword', 'Password must match confirm password');
            console.log('passwords do not match')
        }
        next();
        });
    
        UserSchema.pre('save', function(next) {
            bcrypt.hash(this.password, 10)
                .then((hash) => {
                this.password = hash;
                next();
                });
            });
    



const User = mongoose.model('User', UserSchema)

module.exports=User
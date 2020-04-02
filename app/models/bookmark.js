const mongoose = require('mongoose')
const validator=require('validator')
const sh=require('shorthash')

// schema
const Schema = mongoose.Schema
const bookmarkSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    original_url: {
        type: String,
        required: true,
        //custom validation
        validate:{
            validator:function(value){
                return validator.isURL(value);

            },
            message:function(){
                return 'this is not a valid URL'
            }

        }
    },
    hashed_url: {
        type: String,
       
    },
    tags: {
        type: [String],
       
    },
  
    createdAt:{
        type:Date,
        dafault:Date.now
    }
})

//mongoose middleware
//pre('validate')
bookmarkSchema.pre('save',function(next){
    this.hashed_url=sh.unique(this.original_url)
        next()
})

// model 
const Bookmark = mongoose.model('Bookmark', bookmarkSchema)

module.exports = Bookmark

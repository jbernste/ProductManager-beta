const mongoose = require('mongoose');
const Products = mongoose.model('Product')


module.exports = {
    
    allProd: async (req, res) => {
        try {
            console.log('in Controller allProd');
            const products = await Products.find();
            res.json({data: products});
        }
        catch (err) {
            res.json(err);
        }
    },
    getOneByIdProd: (req, res) => {
        Products.findById({ _id : req.params.id })
            .then((data) => {
                res.json({Products: data})
            })
            .catch(err => res.json(err));
    },
    createProd: (req, res) => {
        console.log('Here is create new pprod',req.body);
        const product = new Products(req.body);
        product.save()
            .then((data) => {
                res.json({newProducts: data});
            })
            .catch(err => res.json(err));
    },
    updateProd: function(req, res) {
        console.log('inside product.js controller',req.params);
        const id = req.params.id;
        console.log(id + "In update route");
        Products.findOneAndUpdate({_id:id}, {
          title: req.body.title,
          price: req.body.price,
          url: req.body.url
        }, function(err, doc){
          if (err) {
            return res.send(500, { error: err });
          }

        else 
        {
          return res.send("succesfully saved")
          }
        })
      },
    deleteProd: (req, res) => {
        console.log('deleting');
        Products.findOneAndDelete({_id : req.params.id })
            .then((data) => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    }
   
}

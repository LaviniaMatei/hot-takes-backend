const Sauce = require('../models/sauce');


exports.createSauce = (req, res, next) => {
     req.body.sauce = JSON.parse(req.body.sauce);
     const url = req.protocol + '://' + req.get('host');
     const sauce = new Sauce({
     name: req.body.sauce.name,
      manufacturer: req.body.sauce.manufacturer,
      description: req.body.sauce.description,
      heat: req.body.sauce.heat,
      imageUrl: url + '/images/' + req.file.filename,
      mainPepper: req.body.sauce.mainPepper,
      userId:req.body.sauce.userId,
      likes:0,
		  dislikes:0,
		  usersLiked :[],
		  usersDisliked:[],
     
      });
    sauce.save().then(
      () => {
        res.status(201).json({
          message: 'Post saved successfully!'
        });
      }
    ).catch(
      (error) => {
        console.log(req.body);
        console.error(error);
        res.status(400).json({
          error: error
        });
      }
    );
  };

  exports.getOneSauce = (req, res, next) => {
    Sauce.findOne({
      _id: req.params.id
    }).then(
      (sauce) => {
        res.status(200).json(sauce);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  };

  exports.modifySauce =(req, res, next) => {
    const sauce = new Sauce({
      _id: req.params.id,
      name: req.body.name,
      manufacturer: req.body.manufacturer,
      description: req.body.description,
      heat: req.body.heat,
      imageUrl:req.body.imageUrl,
      mainPepper: req.body.mainPepper,
      userId: req.body.userId,
    });

    Sauce.updateOne({_id: req.params.id}, sauce).then(
      () => {
        res.status(201).json({
          message: 'Sauce updated successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

  exports.deleteSauce =(req, res, next) => {
    Sauce.deleteOne({_id: req.params.id}).then(
      () => {
        res.status(200).json({
          message: 'Deleted!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

  exports.getAllSauces = 
  (req, res, next) => {
    Sauce.find().then(
      (sauces) => {
        res.status(200).json(sauces);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };
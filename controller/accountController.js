var mongoose = require('mongoose'),
User = mongoose.model('users');
Company = mongoose.model('companys');
CompanyLain = mongoose.model('companyinsides');
People = mongoose.model('peoples');
Project = mongoose.model('projects');
Team = mongoose.model('teams');
Archive = mongoose.model('archives');

//Input data
/*
var project = new Project({
  _id:new mongoose.Types.ObjectId(),
  name:"Project003",
  company:'5aaf19b9190f5b20f807a22a'
}); 
project.save(function(err,projects){
Company.findOneAndUpdate({_id:'5aaf19b9190f5b20f807a22a'},{$push: {project: project._id}},{upsert:true,new:true},function(err,projects){
  if(err)
  console.log(err);
});
  console.log('ok');
});
*/

/*
var user = new User({
  _id: new mongoose.Types.ObjectId(),
  email: "percobaanke7@gmail.com",
  password: "123"
});


user.save(function(err){
  if(err){
    console.log(err);
  }
});
*/
/*
  var owner = new Company({
    companyName: "3"
  });

  owner.save(function(err){
    if(err)
    {
      console.log(err);
    }
  });
});


Company.findOne({'companyName':'Brilyan'}), function(error, Company){
  if(error){
    return handleError(error);
  }
  Company.people = people;
  console.log(Company.people.email);
}
*/
exports.notfound = function(req, res){
  res.sendFile('./404.html', {root: 'public'});
};

exports.signup_open = function(req, res) {
  res.sendFile('./Signup.html', {root: 'public'});
};

exports.check_Name = function(req, res){
  User.find({}, function(err, users){
    if(err){
      res.json(err);
    }

    res.json(users);
  })
}

exports.check_user = function(req, res){
  User.find({password:""}, function(err, users){
    if(err){
      res.json(err);
    }

    res.json(users);
  })
}

exports.set_password = function(req, res){
  User.findOneAndUpdate({_id: req.params.id}, {password: req.body.password}, function(err, users){
    if(err){
      res.json(err);
    }

    var company = new Company({
      _id:new mongoose.Types.ObjectId(),
      companyName:"Owner Company",
      user:req.params.id
    });

    company.save(function(err,companys){
    User.findOneAndUpdate({_id:req.params.id},{$push: {company: company._id}},{upsert:true,new:true},function(err,companys){
      if(err)
      console.log(err);
    });

    //New team
    var team = new Team({
        _id:new mongoose.Types.ObjectId(),
        name:"default",
        company:companys._id
    });

      team.save(function(err, teams){
        Company.findOneAndUpdate({_id:companys._id},{$push: {team: team._id}},{upsert:true,new:true},function(err,teams){
          if(err)
          console.log(err);
        });
      });

      //New company_Sekunder
      var companylain = new CompanyLain({
        _id:new mongoose.Types.ObjectId(),
        name:"Owner Company",
        company_primer:companys._id
      });

      companylain.save(function(err, companyinsides){
        Company.findOneAndUpdate({_id:companys._id},{$push: {company_sekunder: companylain._id}},{upsert:true,new:true},function(err,companyinsides){
          if(err)
          console.log(err);
        });
      });

      var people = new People({
        _id:new mongoose.Types.ObjectId(),
        email: req.body.email,
        position: "owner",
        company_primer: companys._id,
        company: companylain._id,
        archive: "no"
      });

      //console.log(people);

      people.save(function(err, peoples){
        Company.findOneAndUpdate({_id:companys._id}, {$push: {people: people._id}}, {upsert:true, new:true}, function(err, peoples){
          if(err){
            console.log(err);
          }
        });

        CompanyLain.findOneAndUpdate({_id:companylain._id}, {$push: {people: people._id}}, {upsert:true, new:true}, function(err, peoples){
          if(err){
            console.log(err);
          }
        });
      });
      
    });

    res.json(users);
  })
}

exports.check_cookie = function(req, res){
  
}

exports.user_checks = function(req, res){
  User.find({_id: req.params.id}, function(err, users){

    if(err){
      res.json(err);
    }

    res.json(users);
  })
}

exports.create_a_user = function(req, res) {
    
  //console.log(req.body.email);
  var new_user = new User(req.body);
  new_user.save(function(err, user) {
 
    // Automatic new company
    var company = new Company({
      _id:new mongoose.Types.ObjectId(),
      companyName:"Owner Company",
      user:user._id
    });

    company.save(function(err,companys){
    User.findOneAndUpdate({_id:user._id},{$push: {company: company._id}},{upsert:true,new:true},function(err,companys){
      if(err)
      console.log(err);
    });

    //New team
    var team = new Team({
        _id:new mongoose.Types.ObjectId(),
        name:"default",
        company:companys._id
    });

      team.save(function(err, teams){
        Company.findOneAndUpdate({_id:companys._id},{$push: {team: team._id}},{upsert:true,new:true},function(err,teams){
          if(err)
          console.log(err);
        });
      });

      //New company_Sekunder
      var companylain = new CompanyLain({
        _id:new mongoose.Types.ObjectId(),
        name:"Owner Company",
        company_primer:companys._id
      });

      companylain.save(function(err, companyinsides){
        Company.findOneAndUpdate({_id:companys._id},{$push: {company_sekunder: companylain._id}},{upsert:true,new:true},function(err,companyinsides){
          if(err)
          console.log(err);
        });
      });

      var people = new People({
        _id:new mongoose.Types.ObjectId(),
        email: req.body.email,
        position: "owner",
        company_primer: companys._id,
        company: companylain._id,
        archive: "no"
      });

      //console.log(people);

      people.save(function(err, peoples){
        Company.findOneAndUpdate({_id:companys._id}, {$push: {people: people._id}}, {upsert:true, new:true}, function(err, peoples){
          if(err){
            console.log(err);
          }
        });

        CompanyLain.findOneAndUpdate({_id:companylain._id}, {$push: {people: people._id}}, {upsert:true, new:true}, function(err, peoples){
          if(err){
            console.log(err);
          }
        });
      });
      
    });

    if(err)
    console.log(err);
    
  });
  return res.redirect('./Login');
};

/* User Account */
exports.login_open = function(req, res){
  res.sendFile('./Login.html', {root: 'public'});
};

exports.user_log_in = function(req, res){
  var email = req.body.emailLogin;
  var password = req.body.passwordLogin;

  User.findOne({email: email, password: password}, function(err, user){
    if(err){
      console.log(err);
      return res.status(500).send();
    }

    if(!user){
      return res.status(404).send();
    }

    res.json(user);
    //req.session.user = user;
  });
};

exports.user_check = function(req, res){
  /*if(!req.session.user){
    return res.status(401).send();
  }*/

  res.sendFile('./People.html', {root: 'public'});
};

/*
exports.user_logout = function(req, res){
  //req.session.destroy();
  return res.redirect("./login");
}
*/

exports.company_list = function(req, res){
  Company.find({_id:req.params.id}).exec(function(err, companys){
    if(err)
    res.send(err);
    res.json(companys);
  });
};

/*exports.company_list = function(req, res){
  User.findById(req.params.id, function(err, user){
    /*if(!req.session.user)
    {
      return res.status(401).send();
    }*/
    
/*    if(err){
    res.send(err);
    }

    res.json(user);
  });
}
*/

exports.add_company = function(req, res){
  var new_company = new CompanyLain(req.body);

  new_company.save(function(err, company){
    console.log(req.body.company_primer);
    Company.findOneAndUpdate({_id:req.body.company_primer},{$push: {company_sekunder: new_company._id}}, {upsert:true,new:true},function(err, company){
      if(err)
      {
        res.send(err);
        res.json(company);
      }

      else
        return res.redirect('./people?id='+ req.body.company_primer +'');
    });
  });
};

exports.get_invite_people = function(req, res){
  User.find({email: req.params.id}, function(err, users){

    if(err){
      res.send(err);
    }

    res.json(users);
  });
}

exports.invite_People = function(req, res){
  var new_people = new People(req.body);

  new_people.save(function(err, peoples){
    //console.log(req.body.company_primer);
    User.findOneAndUpdate({email: req.body.email}, {$push: {company: req.body.company_primer}}, {upsert:true,new:true}, function(err, users){

      if(err){
        res.send(err);
        res.json(peoples);
      }

    })

    Company.findOneAndUpdate({_id:req.body.company_primer},{$push: {people: new_people._id}}, {upsert:true,new:true},function(err, peoples){
      if(err){
        res.send(err);
        res.json(peoples);
      }

      //console.log("ok");

      CompanyLain.findOneAndUpdate({_id:req.body.company},{$push: {people: new_people._id}}, {upsert:true,new:true},function(err, peoples){
        if(err){
          res.send(err);
          res.json(peoples);
        }

        //console.log("ok");

      });
    });
    return res.redirect('./people');
  });  
};

exports.invite_People_no = function(req, res){
  var new_people = new People(req.body);

  new_people.save(function(err, peoples){
    //console.log(req.body.company_primer);
    User.findOneAndUpdate({email: req.body.email}, {$push: {company: req.body.company_primer}},{upsert:true,new:true}, function(err, users){

      if(err){
        res.send(err);
        res.json(users);
      }
      
      User.findOneAndUpdate({email: req.body.email}, {password: ""}, {upsert:true,new:true}, function(err, users){

        if(err){
          res.send(err);
          res.json(users);
        }
  
      })
      
    })

    Company.findOneAndUpdate({_id:req.body.company_primer},{$push: {people: new_people._id}}, {upsert:true,new:true},function(err, peoples){
      if(err){
        res.send(err);
        res.json(peoples);
      }

      //console.log("ok");

      CompanyLain.findOneAndUpdate({_id:req.body.company},{$push: {people: new_people._id}}, {upsert:true,new:true},function(err, peoples){
        if(err){
          res.send(err);
          res.json(peoples);
        }

        //console.log("ok");

      });
    });

    res.json(peoples);
  });  
};

exports.people_list = function(req, res){
  
    CompanyLain.find({company_primer:req.params.id}).populate('people').exec(function(err, companyinsides){
    if(err){ 
    res.send(err);
    }

    res.json(companyinsides);

  });

  /*People.find({company:req.params.id}).exec(function(err, peoples){
    if(err){ 
    res.send(err);
    }

    res.json(peoples);

  });*/
};

exports.project_show = function(req, res){
  Project.find({company:req.params.id}).exec(function(err, projects){
    if(err){ 
    res.send(err);
    }

    res.json(projects);
  });
};

exports.companylain_show = function(req, res){
  CompanyLain.find({company_primer:req.params.id}).exec(function(err, company){
    if(err){ 
    res.send(err);
    }

    res.json(company);
  });
};

exports.people_show = function(req, res){
  People.find({company_primer:req.params.id}).exec(function(err, peoples){
    if(err){ 
    res.send(err);
    }

    res.json(peoples);
    //console.log(peoples);
  });
};

exports.add_team = function(req, res){
  //console.log("ok");
  //console.log(req.body.people).length;

  var new_team = new Team(req.body);

  new_team.save(function(err, team){

    for(a=0; a < req.body.total; a++ ){
      People.findOneAndUpdate({email:req.body.people[a]},{$push: {team: new_team._id}}, {upsert:true,new:true},function(err, teams){
        if(err)
        {
          res.send(err);
          res.json(teams);

          console.log(err)
        }  
      })
    }

    //console.log(req.body.company);
    Company.findOneAndUpdate({_id:req.body.company},{$push: {team: new_team._id}}, {upsert:true,new:true},function(err, team){
      if(err)
      {
        res.send(err);
        res.json(team);

        console.log(err)
      }
        return res.redirect('./people?id='+ req.body.company +'');
    });
  });
};

exports.team_show = function(req, res){
  Team.find({company:req.params.id}).exec(function(err, team){
    if(err){ 
    res.send(err);
    }

    res.json(team);
  });
}

exports.team_show_id = function(req, res){
  Team.find({_id:req.params.id}).exec(function(err, team){
    if(err){ 
    res.send(err);
    }

    res.json(team);
  });
}

exports.data_show = function(req, res){
  Team.find({_id:req.params.id}).exec(function(err, teams){
    if(err){ 
    res.send(err);
    }

    res.json(teams);
    //console.log(peoples);
  });
};

exports.delete_team = function(req, res) {
  Team.remove({_id: req.params.id}, function(err, teams) {
   
    for(a=0; a < req.body.jumlah; a++){
      People.findOneAndUpdate({team: req.params.id}, {$pullAll: {team: [req.params.id]}}).exec(function(err, pep){
        if(err){
          res.send(err);
        }
      })
    }  
    
    Company.findOneAndUpdate({_id: req.body.comprimer}, {$pullAll: {team: [req.body.idTeam]}}).exec(function(err, comp){
      
      if (err){
        res.send(err);
      }

    })

    if (err){
      res.send(err);
    }

    res.json(teams);
  });
};

exports.delete_people = function(req, res) {
  People.remove({_id: req.params.id}, function(err, peoples) {
    
    User.findOneAndUpdate({email: req.body.name}, {$pullAll: {company: [req.body.compri]}}).exec(function(err, users){
      if (err){
        res.send(err);
        }
    })  
    CompanyLain.findOneAndUpdate({_id: req.body.comsekun}, {$pullAll: {people: [req.params.id]}}).exec(function(err, comse){
      if (err){
      res.send(err);
      }
    })

    Company.findOneAndUpdate({_id: req.body.compri}, {$pullAll: {people: [req.params.id]}}).exec(function(err, compri){
      if (err){
      res.send(err);
      }
    })

    for(a=0; a < req.body.jumteam; a++){
      Team.findOneAndUpdate({_id: req.body.team[a]}, {$pullAll :{people: [req.body.name]}}).exec(function(err, teams){
      //console.log(req.body.nameUser);
      //console.log(req.body.comprimer);
        if(err){
          res.send(err);
          }
      })
    }

    if (err){
    res.send(err);
    }

    res.json(peoples);
  });
};

exports.detail_company = function(req, res){

  res.sendFile('./Company.html', {root: 'public'});

};

exports.company_list_sekunder = function(req, res){
  CompanyLain.find({_id:req.params.id}).populate('people').exec(function(err, companyinsides){
    if(err){
    res.send(err);
    }

    res.json(companyinsides);
  });
};

exports.get_company = function(req, res){
  CompanyLain.find({_id:req.params.id}).exec(function(err, peoples){
    if(err){ 
    res.send(err);
    }

    res.json(peoples);
    //console.log(peoples);
  });
}

exports.put_company = function(req, res){
  CompanyLain.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, companyinsides) {
    if (err)
      res.send(err);

      res.json(companyinsides);
  });
}

exports.put_company_owner = function(req, res){
  CompanyLain.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, companyinsides) {
    
    if (err){
      res.send(err);
    }

    Company.findOneAndUpdate({_id:req.body.company_primer}, {companyName: req.body.name}, function(err, companys){
      
      if (err){
        res.send(err);
      }
      
    })

    res.json(companyinsides);
  
  });
}

exports.put_archive = function(req, res){
    //console.log(req.body.company_primer);
    People.findOneAndUpdate({_id:req.params.id}, req.body, {new: true} ,function(err, archive){
      if(err)
      {
        res.send(err);
      }
      res.json(archive);
  });
}

exports.User_find = function(req, res){
  People.find({_id:req.params.id}).exec(function(err, peoples){
    if(err){ 
    res.send(err);
    }

    res.json(peoples);
    //console.log(peoples);
  });
}

exports.Archive_find = function(req, res){
  People.find({company_primer:req.params.id}).exec(function(err, peoples){
    if(err){ 
    res.send(err);
    }

    res.json(peoples);
    //console.log(peoples);
  });
}

exports.Archive_delete = function(req, res) {
  People.remove({_id: req.params.id}, function(err, peoples) {
    
    User.findOneAndUpdate({email: req.body.nameUser}, {$pullAll: {company: [req.body.comprimer]}}).exec(function(err, users){
      if (err){
        res.send(err);
        }
    })

    Company.findOneAndUpdate({_id: req.body.comprimer}, {$pullAll :{people: [req.params.id]}}).exec(function(err, coms){
      
      if(err){
        res.send(err);
        }

    })

    CompanyLain.findOneAndUpdate({_id: req.body.comsekunder}, {$pullAll :{people: [req.params.id]}}).exec(function(err, coms){
      
      if(err){
        res.send(err);
        }

    })

    for(a=0; a < req.body.jumlahteam; a++){
      Team.findOneAndUpdate({_id: req.body.team[a]}, {$pullAll :{people: [req.body.nameUser]}}).exec(function(err, teams){
      //console.log(req.body.nameUser);
      //console.log(req.body.comprimer);
        if(err){
          res.send(err);
          }
  
      })
    }

    if (err){
    res.send(err);
    }

    res.json(peoples);
  });
};

exports.Archive_edit = function(req, res){
  //console.log(req.body.company_primer);
  People.findOneAndUpdate({_id:req.params.id}, req.body, {new: true} ,function(err, archive){
    if(err){
      res.send(err);
    }

    //Team.

    res.json(archive);
});
}

exports.project_people = function(req, res){
  People.find({_id:req.params.id}).exec(function(err, peoples){
    if(err){ 
    res.send(err);
    }

    res.json(peoples);
    //console.log(peoples);
  });
}

exports.Project_add = function(req, res){
  People.findOneAndUpdate({_id:req.params.id}, {$push: {project: req.body.project}}).exec(function(err, peoples){
    
    if(err){
    console.log(err)
    }

    res.json(peoples)
  })

}

exports.change_permission = function(req, res){
  People.findOneAndUpdate({_id:req.params.id}, {position: req.body.position}).exec(function(err, peoples){
    if(err){
    console.log(err)
    }

    res.json(peoples)
  })
}

exports.change_company = function(req, res){
  People.findOneAndUpdate({_id:req.params.id}, {company: req.body.company}).exec(function(err, companys){
    
    CompanyLain.findOneAndUpdate({people: req.params.id}, {$pullAll: {people: [req.params.id]}}).exec(function(err, pep){
    
      if(err){
        console.log(err)
      }

    })

    CompanyLain.findOneAndUpdate({_id: req.body.company}, {$push: {people: req.params.id}}, {upsert:true, new:true}, function(err, peps){

      if(err){
        console.log(err)
      }

    })

    if(err){
    console.log(err)
    }

    res.json(companys)
  })
}

exports.userCompany_find = function(req, res){
  People.find({_id:req.params.id}).exec(function(err, peoples){
    if(err){ 
    res.send(err);
    }

    res.json(peoples);
    //console.log(peoples);
  });
}

exports.peopleTeam_add = function(req, res){
  People.findOneAndUpdate({_id:req.params.id}, {$push: {team: req.body.team}}).exec(function(err, peoples){
    
    Team.findOneAndUpdate({_id: req.body.team}, {$push: {people: req.body.name}}).exec(function(err, teams){

      if(err){
        console.log(err)
      }  

    })
    
    if(err){
      console.log(err)
    }

    res.json(peoples)
  })
}

exports.delete_team_people = function(req, res){
  
  Team.findOneAndUpdate({_id: req.params.id}, {$pullAll: {people: [req.body.name]}}).exec(function(err, teams){

    if(err){
      res.send(err);
    }

    res.json(teams);

  })

}

exports.delete_people_people = function(req, res){
  Company.findOneAndUpdate({_id: req.body.compri}, {$pullAll: {people: [req.params.id]}}).exec(function(err, companys){

    People.remove({_id: req.params.id}, function(err, peps){

      if(err){
        res.send(err);
      }

    })

    if(err){
      res.send(err);
    }

    res.json(companys);
  })
}

exports.delete_companysekun_people = function(req, res){
  
  Company.findOneAndUpdate({_id: req.body.compri}, {$pullAll: {company_sekunder: [req.params.id]}}).exec(function(err, companys){

    CompanyLain.remove({_id: req.params.id}, function(err, companylain){

      if(err){
        res.send(err);
      }

    })

    if(err){
      res.send(err);
    }

    res.json(companys);
  })
}
/*
exports.company_delete = function(req, res){
  CompanyLain.remove({_id: req.params.id}, function(err, compsekun){

    Company.findOneAndUpdate({_id: req.body.compri}, {$pullAll: {company_sekunder: req.params.id}}).exec(function(err, compri){

      if(err){
        res.send(err);
      }

    })

    for(a=0; a < req.body.jumlah; a++){
      Company.findOneAndUpdate({_id: req.body.compri}, {$pullAll: {people: req.body.people[a]}}).exec(function(err, comppeople){
        
        if(err){
          res.send(err);
        }

      })

      People.findOneAndUpdate({company_primer: req.body.compri}, {$pullAll: {_id: req.body.people[a]}}).exec(function(err, peoples){
        
        if(err){
          res.send(err);
        }

      })
    }

    if(err){
      res.send(err);
    }

  })
}*/

//direct Page

/*exports.companyDirect = function(req, res){
  res.sendFile('./CompanyList.html', {root: 'public'});
};*/

exports.add_new_Company = function(req, res){
  res.sendFile('./NewCompany.html', {root: 'public'});
};
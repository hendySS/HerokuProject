module.exports = function(app){
  var todoList = require('../controller/accountController');
  
    app.route('/404')
      .get(todoList.notfound)
      .post(todoList.notfound)
      .put(todoList.notfound)
      .delete(todoList.notfound);

    app.route('/check')
      .get(todoList.check_cookie);
    
    app.route('/confirmpage')
      .get(todoList.check_user);
    
    app.route('/setPassword/:id')
      .put(todoList.set_password);
      
    app.route('/user_list/:id')
      .get(todoList.user_checks);
    // todoList Routes
    app.route('/signup')
      .get(todoList.signup_open)
      .post(todoList.create_a_user);

    app.route('/checkName')
      .get(todoList.check_Name);
    /* Account Route */

    app.route('/login')
      .get(todoList.login_open)
      .post(todoList.user_log_in);
    
    app.route('/people')
      .get(todoList.user_check);

    app.route('/people_show/:id')
      .get(todoList.people_list);
    
    app.route('/addCompany')
      .post(todoList.add_company);
    
    app.route('/invitePeople')
      .post(todoList.invite_People);

    app.route('/invitePeopleNo')
      .post(todoList.invite_People_no);

    app.route('/getInvitePeople/:id')
      .get(todoList.get_invite_people);

    app.route('/addteam')
      .post(todoList.add_team);

    /*app.route('/logout')
      .get(todoList.user_logout);
    */

    app.route('/company_list/:id')
      .get(todoList.company_list);

    app.route('/getProject/:id')
      .get(todoList.project_show);
    
    app.route('/getCompanyLain/:id')
      .get(todoList.companylain_show);
      
    app.route('/getPeople/:id')
      .get(todoList.people_show);

    app.route('/getTeam/:id')
      .get(todoList.team_show);

    app.route('/delTeam/:id')
      .delete(todoList.delete_team);

    app.route('/getTeamId/:id')
      .get(todoList.team_show_id);
    
    app.route('/delpep/:id')
      .delete(todoList.delete_people);

    app.route('/detailCompanyLink')
      .get(todoList.detail_company);

    app.route('/companyList/:id')
      .get(todoList.company_list_sekunder);

    app.route('/getCompany/:id')
      .get(todoList.get_company)
      .put(todoList.put_company);

    app.route('/getCompanyOwner/:id')
      .put(todoList.put_company_owner);

    app.route('/dataArchive/:id')
      .put(todoList.put_archive);

    app.route('/user/:id')
      .get(todoList.User_find);
    
    app.route('/userCompany/:id')
      .get(todoList.userCompany_find);

    app.route('/archive/:id')
      .get(todoList.Archive_find)
      .delete(todoList.Archive_delete)
      .put(todoList.Archive_edit);

    app.route('/projectPeople/:id')
      .get(todoList.project_people)
      .post(todoList.Project_add);

    app.route('/changePermission/:id')
      .put(todoList.change_permission);

    app.route('/changeCompany/:id')
      .put(todoList.change_company);

    app.route('/teamPeople/:id')
      .post(todoList.peopleTeam_add);

    // People 
    app.route('/del_team_pep/:id')
      .delete(todoList.delete_team_people);

    app.route('/del_people_pep/:id')
      .delete(todoList.delete_people_people);

    app.route('/del_people_companysekun/:id')
      .delete(todoList.delete_companysekun_people);
    /*  
    app.route('/companyDelete/:id')
      .delete(todoList.company_delete);
    
    app.route('/deleteteam')
      .delete(todoList.delete_team_people);*/
    //Direct Route
    /*app.route('/company')
      .get(todoList.companyDirect);
     */ 
    };
const jwt = require('jsonwebtoken'); 

exports.requireAuth = (req, res, next) => {

  const token = req.cookies.jwt;

  if(!token) {
    return res.redirect('/login'); 
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    if(decoded.user.accountType !== 'Employee' && decoded.user.accountType !== 'Admin') {
      return res.redirect('/login');
    }

    next();

  } catch(err) {
    console.log(err);
    res.redirect('/login');
  }

}

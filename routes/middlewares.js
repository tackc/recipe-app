const { validationResult } = require('express-validator');

module.exports = {
    handleErrors(templateFunc, dataCb) {
        return async (req, res, next) => {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                // Need to initialize data here or it won't be accessible due to scope
                let data = {};
                if (dataCb) {
                    data = await dataCb(req);
                }

                return res.send(templateFunc({ errors, ...data }));
            }

            // Everything went well, call the next middleware or invoke the route handler
            next();
        };
    },
    requireAuth(req, res, next) {
        if (!req.session.userId) {
            return res.redirect('/signin');
        }

        next();
    }
};
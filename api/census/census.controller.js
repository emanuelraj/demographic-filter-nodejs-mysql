
const dbService = require('../../service/db.service');

module.exports = {
    index: (req, res) => {
        let queryString = '';
        if (req.query.group_by) {
            let groupBy = req.query.group_by.slice(1, -1);
            queryString = 'SELECT ' + groupBy + ', COUNT(*) as count, ROUND(AVG(age),1) as average_age FROM census_learn_sql group by `' + groupBy + '`';
        } else {
            queryString = 'SELECT * FROM census_learn_sql limit 100';
        }

        console.log(queryString);
        
        dbService.query(queryString, function (error, results, fields) {
            if (error)
                throw error;
            res.status(200).json({ message: "Census Details", data: results });
        });
    },

    getDemographicItems: (req, res) =>{
        
        let queryString = 'describe census_learn_sql';

        console.log(queryString);
        
        dbService.query(queryString, function (error, results, fields) {
            if (error)
                throw error;
            let demographicItem = results.map((item) => {
                return item.Field;
              });
            res.status(200).json({ message: "Census Details", data: demographicItem });
        });
    }
}
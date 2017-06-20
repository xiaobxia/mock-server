/**
 * Created by xiaobxia on 2017/6/20.
 */
module.exports = {
    pageParse: function (req, total) {
        let query = req.query,
            page = parseInt(query.page)|| 1,
            size = parseInt(query.size)|| 10,
            totalPage = Math.ceil(total / size),
            startIndex = (page - 1) * size,
            resNum = page >= totalPage ? (total - startIndex) : size;
        return {
            page: page,
            size: size,
            totalPage: totalPage,
            resNum: resNum,
            startIndex: startIndex
        }
    }
}
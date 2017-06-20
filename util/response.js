/**
 * Created by xiaobxia on 2017/6/20.
 */
module.exports = {
    pagecreate: function(total, page, size, result) {
        let totalPage = Math.ceil(total / size)
        let resNum = page >= totalPage ? (total - (page - 1) * size) : size
        return {
            data: {
                'result': result,
                'success': true,
                'page': page,
                'rowCount': resNum,
                'size': resNum,
                'totalNum': total,
                'totalPage': totalPage
            }
        }
    }
}
/**
 * Created by xiaobxia on 2017/6/20.
 */
module.exports = {
    pageBase: function(total, page, size) {
        let totalPage = Math.ceil(total / size)
        let resNum = page >= totalPage ? (total - (page - 1) * size) : size
        return {
            'resNum': resNum,
            'startIndex': (page - 1) * size,
            data: {
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
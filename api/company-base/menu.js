/**
 * Created by xiaobxia on 2017/5/5.
 */
const fs=require('fs-extra');

let menuBase = {
    "success": true,
    "result": [
        {
            "id": 1000,
            "name": "Dashboard",
            "path": "/dashboard",
            "url": "common/dashboard",
            "icon": "fa-tachometer"
        },
        {
            "id": 1006,
            "name": "System",
            "icon": "fa-table",
            "children": [
                {
                    "id": 1002,
                    "name": "User",
                    "path": "/user/index",
                    "url": "user/user"
                },
                {
                    "id": 1003,
                    "name": "Role",
                    "path": "/role/index",
                    "url": "role/role"
                },
                {
                    "id": 1005,
                    "name": "Privilege",
                    "path": "/priv/index",
                    "url": "privilege/priv"
                },
                {
                    "id": 1006,
                    "name": "Parameter",
                    "path": "/param/index",
                    "url": "param/param"
                },
                {
                    "id": 1007,
                    "name": "Cache",
                    "path": "/cache/index",
                    "url": "cache/cache"
                },
                {
                    "id": 1008,
                    "name": "JobService",
                    "path": "/jobservice/index",
                    "url": "jobservice/jobservice"
                },
                {
                    "id": 10010,
                    "name": "App",
                    "path": "/appversion/index",
                    "url": "appversion/app"
                },
                {
                    "id": 1009,
                    "name": "App Version",
                    "path": "/appversion/index",
                    "url": "appversion/index"
                }
            ]
        },
        {
            "id": 200,
            "name": "Test",
            "path": "/test",
            "url": "test"
        }
    ]
}
let menuExtend=JSON.parse(fs.readFileSync('./api/company-base-extend/menuExtend.json'));
menuBase.result.push(menuExtend);

module.exports = {
    api: 'sys/priv/menu',
    response: function (req, res) {
        console.log(req.query)
        console.log(req.method)
        res.json(menuBase)
    }
}

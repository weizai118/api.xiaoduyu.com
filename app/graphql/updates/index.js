
import posts from './posts'
import user from './user'

let list = {
  posts, user
}

export default (args, name, role) => {

  let { queryList, updateList } = list[name]

  let query = {},
      update = {}

  for (let i in args) {
    if (!queryList[i]) continue
    let result = queryList[i](args[i])
    if (role && result.role && role != result.role) continue
    query[result.name] = result.value
  }

  // 更新字段查询
  for (let i in args) {
    if (!updateList[i]) continue
    let result = updateList[i](args[i])
    if (role && result.role && role != result.role) continue
    update[result.name] = result.value
  }

  return { query, update }

}

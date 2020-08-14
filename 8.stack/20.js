/**
 * @description 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * @description 左括号必须用相同类型的右括号闭合。
 * @description 左括号必须以正确的顺序闭合
 * @param {string} s
 * @return {boolean}
 */
var s = '[)';
var isValid = function(s) {
  const length = s.length;
  if (length === 0) return true;
  if (length % 2 === 1) {
    return false;
  }
  var stack = [];
  const map = new Map();
  map.set('{', '}');
  map.set('[', ']');
  map.set('(', ')');
  for (let i = 0; i < length; i++) {
    if(map.has(s[i])) {
      stack.push(s[i]);
    } else {
      // 也可以先取栈顶元素判断完成后再弹
      const str = stack.pop();
      if (map.get(str) === s[i]) {
        continue;
      } else {
        stack.push(str)
        break;
      }
    }
  }
  
  return stack.length === 0;
};

const res = isValid(s);
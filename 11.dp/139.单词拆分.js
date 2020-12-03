
/**
 * 
 * 给定一个非空字符串 s 和一个包含非空单词的列表 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。

说明：

拆分时可以重复使用字典中的单词。
你可以假设字典中没有重复的单词。
示例 1：

输入: s = "leetcode", wordDict = ["leet", "code"]
输出: true
解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。
示例 2：

输入: s = "applepenapple", wordDict = ["apple", "pen"]
输出: true
解释: 返回 true 因为 "applepenapple" 可以被拆分成 "apple pen apple"。
     注意你可以重复使用字典中的单词。
示例 3：

输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
输出: false
 */


/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    const dp = Array(s.length + 1);
    // dp[i]表示字符串s.substring(0,i)能否由字典里的单词来组成
    dp[0] = true;
    for (let i = 0; i < s.length + 1; i++) {
        for (let word of wordDict) {
            // 在考虑当前字符串能否被匹配到时，要基于之前的子串结果来匹配，之前的子串能被匹配时才继续
            if (word.length <= i && dp[i - word.length]) {
                // 只要从之前匹配的某个子串开始到当前配置能匹配到即可，这里存在2种情况
                // 1. 无重复子串匹配
                // 2. 存在重复子串匹配
                // 二者均不影响最终结果
                if (s.substring(i - word.length, i) === word) {
                    dp[i] = true;
                }
            }
        }
    }
    return dp[s.length] || false;
};


wordBreak('leetcode', ['code', 'leet']);
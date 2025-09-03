/**
 * 檔案名稱：terms/page.tsx
 * 建立日期：2025-09-03
 * 描述：守護鈴 (Guardian Ring) 使用條款頁面
 * 功能：
 *   - 展示應用程式的服務條款和使用規範
 *   - 說明用戶權利義務和服務限制
 *   - 提供法律條款和免責聲明
 *   - 確保服務使用的合法性和透明度
 * 版本：1.0
 * 作者：Guardian Ring 開發團隊
 * 更新紀錄：
 *   - 2025-09-03: 初版建立，包含完整使用條款內容
 * 注意事項：
 *   - 定期審查條款以確保法律合規性
 *   - 重大變更時需提前通知用戶
 *   - 保持條款明確易懂，避免歧義
 */

import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* 導航欄 */}
      <nav className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link href="/" className="text-white hover:text-blue-300 transition-colors">
            ← 返回首頁
          </Link>
        </div>
      </nav>

      {/* 主要內容 */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
          {/* 標題區域 */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              使用條款
            </h1>
            <p className="text-xl text-blue-200">
              明確的規範，保障雙方權益
            </p>
            <p className="text-gray-300 mt-2">
              最後更新日期：2025年9月3日
            </p>
          </div>

          {/* 條款內容 */}
          <div className="space-y-8 text-white">
            
            {/* 接受條款 */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-300 mb-4">1. 條款接受</h2>
              <p className="text-gray-300 leading-relaxed">
                歡迎使用守護鈴 (Guardian Ring) 應用程式。透過下載、安裝或使用本應用程式，
                您同意受這些使用條款約束。如果您不同意這些條款，請勿使用我們的服務。
                這些條款構成您與我們之間具有法律約束力的協議。
              </p>
            </section>

            {/* 服務描述 */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-300 mb-4">2. 服務描述</h2>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  守護鈴是一款社交緩衝工具，旨在幫助用戶在各種社交情境中獲得適當的脫身機會。
                  我們的服務包括但不限於：
                </p>
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                  <ul className="text-gray-300 space-y-2">
                    <li>• <strong>模擬來電功能</strong>：創造真實的來電情境</li>
                    <li>• <strong>智慧排程系統</strong>：靈活設定觸發時間</li>
                    <li>• <strong>個人化設定</strong>：自訂來電者資訊和鈴聲</li>
                    <li>• <strong>隱私保護</strong>：確保所有數據本地儲存</li>
                  </ul>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  請注意，本服務僅供個人合法使用，不得用於任何違法或有害他人的活動。
                </p>
              </div>
            </section>

            {/* 用戶責任 */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-300 mb-4">3. 用戶責任與義務</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">允許的使用方式</h3>
                  <ul className="text-gray-300 leading-relaxed space-y-1 ml-4">
                    <li>• 在社交場合中禮貌地脫身</li>
                    <li>• 練習應對緊急情況的反應</li>
                    <li>• 作為個人時間管理工具</li>
                    <li>• 在安全的環境下測試應用功能</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">禁止的使用方式</h3>
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                    <ul className="text-red-200 space-y-1">
                      <li>• 用於欺騙、詐騙或其他不誠實行為</li>
                      <li>• 在緊急情況下妨礙真實的緊急通信</li>
                      <li>• 騷擾、威脅或傷害他人</li>
                      <li>• 違反當地法律法規的任何行為</li>
                      <li>• 嘗試破解、修改或逆向工程應用程式</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 服務可用性 */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-300 mb-4">4. 服務可用性與限制</h2>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  我們致力於提供穩定可靠的服務，但無法保證服務絕對不中斷。以下情況可能影響服務：
                </p>
                <ul className="text-gray-300 leading-relaxed space-y-2 ml-4">
                  <li>• <strong>系統維護</strong>：定期更新和維護作業</li>
                  <li>• <strong>技術問題</strong>：不可預見的技術故障</li>
                  <li>• <strong>設備相容性</strong>：某些舊版設備可能不支援</li>
                  <li>• <strong>網路環境</strong>：用戶網路連線問題</li>
                </ul>
                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                  <p className="text-yellow-200">
                    <strong>重要提醒</strong>：本應用程式不應作為真正緊急情況下的唯一通信工具。
                    在真實緊急狀況中，請立即撥打當地緊急服務電話。
                  </p>
                </div>
              </div>
            </section>

            {/* 知識產權 */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-300 mb-4">5. 智慧財產權</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                守護鈴應用程式及其所有內容、功能和特性均受智慧財產權法保護：
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                  <h4 className="text-purple-300 font-medium mb-2">我們的權利</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• 應用程式設計和源代碼</li>
                    <li>• 商標和品牌名稱</li>
                    <li>• 介面設計和用戶體驗</li>
                    <li>• 演算法和技術創新</li>
                  </ul>
                </div>
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                  <h4 className="text-green-300 font-medium mb-2">您的權利</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• 個人非商業使用權</li>
                    <li>• 在遵循條款下的功能使用</li>
                    <li>• 個人數據的所有權</li>
                    <li>• 合理範圍內的意見回饋</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 隱私與數據 */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-300 mb-4">6. 隱私與數據保護</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                您的隱私對我們至關重要。我們的數據保護原則包括：
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-medium">本地數據儲存</h4>
                    <p className="text-gray-300 text-sm">所有個人設定和使用數據僅儲存在您的設備上</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-medium">最小化數據收集</h4>
                    <p className="text-gray-300 text-sm">我們只收集必要的匿名使用統計資料</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-medium">透明的隱私政策</h4>
                    <p className="text-gray-300 text-sm">詳細的隱私權政策說明我們的數據處理方式</p>
                  </div>
                </div>
              </div>
              <p className="text-blue-300 mt-4">
                更多詳情請參閱我們的 
                <Link href="/privacy" className="underline hover:text-blue-200 ml-1">
                  隱私權政策
                </Link>
              </p>
            </section>

            {/* 免責聲明 */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-300 mb-4">7. 免責聲明</h2>
              <div className="bg-gray-800/50 border border-gray-600 rounded-lg p-6">
                <p className="text-gray-300 leading-relaxed mb-4">
                  在法律允許的最大範圍內，我們的服務按「現狀」和「可用」基礎提供，
                  不提供任何明示或暗示的擔保，包括但不限於：
                </p>
                <ul className="text-gray-300 text-sm space-y-1 ml-4">
                  <li>• 服務的不中斷性、無錯誤性或安全性</li>
                  <li>• 服務滿足您特定需求的適合性</li>
                  <li>• 通過服務獲得的結果的準確性或可靠性</li>
                  <li>• 任何錯誤或缺陷將被糾正</li>
                </ul>
              </div>
            </section>

            {/* 責任限制 */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-300 mb-4">8. 責任限制</h2>
              <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4">
                <p className="text-orange-200 leading-relaxed mb-4">
                  <strong>重要</strong>：在法律允許的最大範圍內，我們不承擔以下責任：
                </p>
                <ul className="text-orange-200 text-sm space-y-1 ml-4">
                  <li>• 因使用或無法使用服務而造成的任何直接或間接損害</li>
                  <li>• 業務中斷、利潤損失或數據丟失</li>
                  <li>• 第三方的任何行為或疏忽</li>
                  <li>• 因不當使用應用程式而產生的後果</li>
                </ul>
              </div>
            </section>

            {/* 服務修改與終止 */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-300 mb-4">9. 服務修改與終止</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">服務修改權利</h3>
                  <p className="text-gray-300 leading-relaxed">
                    我們保留隨時修改、暫停或終止部分或全部服務的權利，包括：
                  </p>
                  <ul className="text-gray-300 mt-2 space-y-1 ml-4">
                    <li>• 新增或移除功能特性</li>
                    <li>• 更改服務的使用條件</li>
                    <li>• 調整服務的可用性</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">帳戶終止</h3>
                  <p className="text-gray-300 leading-relaxed">
                    我們可能在以下情況下暫停或終止您的服務使用權：
                  </p>
                  <ul className="text-gray-300 mt-2 space-y-1 ml-4">
                    <li>• 違反這些使用條款</li>
                    <li>• 從事不當或非法行為</li>
                    <li>• 長期不活躍的帳戶</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 適用法律 */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-300 mb-4">10. 適用法律與爭議解決</h2>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  這些使用條款受中華民國（台灣）法律管轄，任何因本條款或服務使用而產生的爭議，
                  將通過以下方式解決：
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                    <div>
                      <h4 className="text-white font-medium">協商解決</h4>
                      <p className="text-gray-300 text-sm">優先通過友好協商解決爭議</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                    <div>
                      <h4 className="text-white font-medium">調解程序</h4>
                      <p className="text-gray-300 text-sm">通過專業調解機構進行調解</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                    <div>
                      <h4 className="text-white font-medium">司法途徑</h4>
                      <p className="text-gray-300 text-sm">最後通過台灣地方法院進行訴訟解決</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 條款修改 */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-300 mb-4">11. 條款修改</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                我們可能會不定期修改這些使用條款以反映服務變更或法律要求。重大修改將通過以下方式通知您：
              </p>
              <ul className="text-gray-300 leading-relaxed space-y-2 ml-4">
                <li>• <strong>應用程式內通知</strong>：在您下次打開應用程式時顯示</li>
                <li>• <strong>電子郵件通知</strong>：發送至您提供的電子郵件地址</li>
                <li>• <strong>官網公告</strong>：在我們的官方網站發布更新通知</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                修改後的條款將在公告後 30 天生效。繼續使用服務即表示您接受修改後的條款。
              </p>
            </section>

            {/* 聯繫資訊 */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-300 mb-4">12. 聯繫資訊</h2>
              <div className="bg-gray-800/50 border border-gray-600 rounded-lg p-6">
                <p className="text-gray-300 leading-relaxed mb-4">
                  如果您對這些使用條款有任何疑問或需要協助，請聯繫我們：
                </p>
                <div className="space-y-2 text-gray-300">
                  <p><strong>客服郵箱</strong>：support@guardianring.app</p>
                  <p><strong>法務諮詢</strong>：legal@guardianring.app</p>
                  <p><strong>回應時間</strong>：我們將在 7 個工作天內回復您的查詢</p>
                  <p><strong>服務時間</strong>：週一至週五 9:00-18:00 (台北時間)</p>
                  <p><strong>公司地址</strong>：台灣台北市信義區信義路五段7號</p>
                </div>
              </div>
            </section>

            {/* 生效日期 */}
            <section>
              <div className="bg-blue-900/30 border border-blue-400/50 rounded-lg p-4 text-center">
                <p className="text-blue-200 font-medium">
                  本使用條款自 2025年9月3日 起生效
                </p>
                <p className="text-gray-300 text-sm mt-1">
                  感謝您選擇守護鈴，祝您使用愉快！
                </p>
              </div>
            </section>

          </div>

          {/* 返回連結 */}
          <div className="mt-12 pt-8 border-t border-white/20 text-center">
            <Link 
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              返回首頁
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
/**
 * 檔案名稱：privacy/page.tsx
 * 建立日期：2025-09-03
 * 描述：守護鈴 (Guardian Ring) 隱私權政策頁面
 * 功能：
 *   - 展示應用程式的隱私權政策內容
 *   - 說明數據收集、使用和保護政策
 *   - 提供清晰易懂的隱私權條款說明
 *   - 符合 GDPR、CCPA 等隱私法規要求
 * 版本：1.0
 * 作者：Guardian Ring 開發團隊
 * 更新紀錄：
 *   - 2025-09-03: 初版建立，包含完整隱私權政策條款
 * 注意事項：
 *   - 定期更新隱私權政策以符合最新法規
 *   - 重要變更時需通知用戶
 *   - 保持條款清晰易懂，避免法律術語過度複雜
 */

import Link from 'next/link';

export default function PrivacyPolicy() {
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
              隱私權政策
            </h1>
            <p className="text-xl text-blue-200">
              守護您的隱私，是我們的承諾
            </p>
            <p className="text-gray-300 mt-2">
              最後更新日期：2025年9月3日
            </p>
          </div>

          {/* 政策內容 */}
          <div className="space-y-8 text-white">
            
            {/* 簡介 */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-300 mb-4">前言</h2>
              <p className="text-gray-300 leading-relaxed">
                感謝您選擇使用守護鈴 (Guardian Ring)。我們深知隱私權的重要性，致力於保護您的個人資訊。
                本隱私權政策詳細說明我們如何收集、使用、儲存和保護您的資訊，以及您對個人資料的控制權。
              </p>
            </section>

            {/* 資訊收集 */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-300 mb-4">我們收集的資訊</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">自動收集的資訊</h3>
                  <ul className="text-gray-300 leading-relaxed space-y-2 ml-4">
                    <li>• <strong>設備資訊</strong>：設備型號、作業系統版本、應用程式版本</li>
                    <li>• <strong>使用統計</strong>：應用程式啟動頻率、功能使用情況（匿名化處理）</li>
                    <li>• <strong>技術資料</strong>：崩潰報告、效能數據（不包含個人識別資訊）</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">您主動提供的資訊</h3>
                  <ul className="text-gray-300 leading-relaxed space-y-2 ml-4">
                    <li>• <strong>聯絡資訊</strong>：當您聯繫客服時提供的電子郵件地址</li>
                    <li>• <strong>回饋內容</strong>：您主動分享的使用心得或建議</li>
                    <li>• <strong>設定偏好</strong>：您在應用程式中的個人化設定</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 資訊使用 */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-300 mb-4">資訊使用方式</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                我們收集的資訊僅用於以下目的：
              </p>
              <ul className="text-gray-300 leading-relaxed space-y-2 ml-4">
                <li>• <strong>改善服務品質</strong>：分析使用模式以優化應用程式功能</li>
                <li>• <strong>技術支援</strong>：診斷和修復技術問題</li>
                <li>• <strong>安全保護</strong>：檢測和防範安全威脅</li>
                <li>• <strong>法律合規</strong>：遵守相關法律法規要求</li>
                <li>• <strong>通知更新</strong>：告知重要的應用程式更新或政策變更</li>
              </ul>
            </section>

            {/* 資訊共享 */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-300 mb-4">資訊共享原則</h2>
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-4">
                <p className="text-red-200 font-medium">
                  我們承諾：絕不出售、租賃或交易您的個人資訊給第三方
                </p>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                在以下極少數情況下，我們可能會共享匿名化的統計資料：
              </p>
              <ul className="text-gray-300 leading-relaxed space-y-2 ml-4">
                <li>• <strong>法律要求</strong>：應司法機關合法要求</li>
                <li>• <strong>安全防護</strong>：保護用戶和公眾安全的必要情況</li>
                <li>• <strong>業務轉讓</strong>：公司併購或重組時（需提前通知用戶）</li>
              </ul>
            </section>

            {/* 資料安全 */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-300 mb-4">資料安全措施</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                我們採用業界標準的安全措施保護您的資訊：
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                  <h4 className="text-green-300 font-medium mb-2">技術安全</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• 端對端加密</li>
                    <li>• 安全傳輸協議 (HTTPS)</li>
                    <li>• 定期安全審計</li>
                  </ul>
                </div>
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                  <h4 className="text-blue-300 font-medium mb-2">管理安全</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• 存取權限控制</li>
                    <li>• 員工隱私培訓</li>
                    <li>• 資料保存期限管理</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 用戶權利 */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-300 mb-4">您的權利</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                您對個人資料擁有以下權利：
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-medium">查閱權</h4>
                    <p className="text-gray-300 text-sm">了解我們收集了您的哪些資訊</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-medium">更正權</h4>
                    <p className="text-gray-300 text-sm">要求修正不正確的個人資訊</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-medium">刪除權</h4>
                    <p className="text-gray-300 text-sm">要求刪除您的個人資料</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-medium">可攜權</h4>
                    <p className="text-gray-300 text-sm">要求以結構化格式取得您的資料</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Cookie 政策 */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-300 mb-4">Cookies 和類似技術</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                我們的應用程式不使用網頁 Cookies，但可能使用以下本地儲存技術：
              </p>
              <ul className="text-gray-300 leading-relaxed space-y-2 ml-4">
                <li>• <strong>應用程式偏好設定</strong>：儲存您的個人化設定</li>
                <li>• <strong>分析識別符</strong>：用於匿名使用統計（可選擇退出）</li>
                <li>• <strong>暫存資料</strong>：提高應用程式效能</li>
              </ul>
            </section>

            {/* 兒童隱私 */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-300 mb-4">兒童隱私保護</h2>
              <p className="text-gray-300 leading-relaxed">
                我們的服務對象為 13 歲以上用戶。我們不會故意收集 13 歲以下兒童的個人資訊。
                如果您發現我們無意中收集了兒童的個人資料，請立即聯繫我們，我們將儘快刪除相關資訊。
              </p>
            </section>

            {/* 政策變更 */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-300 mb-4">政策變更通知</h2>
              <p className="text-gray-300 leading-relaxed">
                我們可能會不定期更新本隱私權政策。重大變更將通過應用程式內通知或官網公告的方式告知您。
                建議您定期查看本政策以了解最新資訊。持續使用我們的服務即表示您接受更新後的政策。
              </p>
            </section>

            {/* 聯繫資訊 */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-300 mb-4">聯繫我們</h2>
              <div className="bg-gray-800/50 border border-gray-600 rounded-lg p-6">
                <p className="text-gray-300 leading-relaxed mb-4">
                  如果您對本隱私權政策有任何疑問或需要行使您的權利，請通過以下方式聯繫我們：
                </p>
                <div className="space-y-2 text-gray-300">
                  <p><strong>電子郵件</strong>：privacy@guardianring.app</p>
                  <p><strong>回應時間</strong>：我們將在 7 個工作天內回復您的查詢</p>
                  <p><strong>地址</strong>：台灣台北市信義區信義路五段7號</p>
                </div>
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
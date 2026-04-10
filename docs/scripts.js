// ========================================
// GDS Starry UI 2.0 - Preview Page Scripts
// ========================================

// Brand data
const brandData = {
  zeekr: {
    name: '极氪 Zeekr',
    brand: ['#FEEFE5', '#FDE0CC', '#FBC099', '#F9A166', '#F78133', '#F56200', '#C44E00', '#933B00', '#622700', '#311400'],
    gray: ['#FFFFFF', '#FAFAFB', '#F8F8F8', '#F0F0F0', '#E6E6E6', '#D9DBDB', '#B9BEC0', '#8E9496', '#64696B', '#4F4F4F', '#232323', '#000000'],
    radius: { none: 0, s: 2, m: 4, l: 8, xl: 8, xxl: 12, xxxl: 16, full: 999, buttonS: 999, buttonM: 999 }
  },
  lynkco: {
    name: '领克 LynkCo',
    brand: ['#EDF3FF', '#DBE6FF', '#D3E1FE', '#ACC2F8', '#7AA6FD', '#4D88FB', '#2971FF', '#2355F5', '#153C9A', '#142951'],
    gray: ['#FFFFFF', '#F6F6F6', '#E8E8E8', '#CCCCCC', '#B3B3B3', '#999999', '#7D7D7D', '#797979', '#666666', '#585858', '#282828', '#000000'],
    radius: { none: 0, s: 2, m: 4, l: 6, xl: 8, xxl: 8, xxxl: 12, full: 999, buttonS: 2, buttonM: 2 }
  },
  'after-sales': {
    name: '售后 After-Sales',
    brand: ['#EAEFFF', '#D5DFFF', '#ABBFFF', '#819EFF', '#587EFF', '#2E5EFF', '#254BCD', '#1C399B', '#122669', '#091437'],
    gray: ['#FFFFFF', '#F6F9FF', '#F4F5FA', '#E1E4ED', '#D6D9E1', '#C6CBDA', '#B4BBCD', '#99A0B5', '#565E79', '#363F5F', '#1B223B', '#000000'],
    radius: { none: 0, s: 2, m: 4, l: 6, xl: 8, xxl: 12, xxxl: 16, full: 999, buttonS: 4, buttonM: 6 }
  }
};

// Current brand
let currentBrand = 'zeekr';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderColors();
  renderRadius();
  renderTypography();
  renderSpacing();
});

// Switch brand
function switchBrand(brand) {
  currentBrand = brand;

  // Update button states
  document.querySelectorAll('.brand-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.brand === brand);
  });

  // Update CSS variables
  const data = brandData[brand];
  const root = document.documentElement;

  // Brand colors
  data.brand.forEach((color, i) => {
    root.style.setProperty(`--brand-${i + 1}`, color);
  });

  // Gray colors
  data.gray.forEach((color, i) => {
    root.style.setProperty(`--gray-${i}`, color);
  });

  // Radius
  root.style.setProperty('--radius-s', data.radius.s + 'px');
  root.style.setProperty('--radius-m', data.radius.m + 'px');
  root.style.setProperty('--radius-l', data.radius.l + 'px');
  root.style.setProperty('--radius-xl', data.radius.xl + 'px');
  root.style.setProperty('--radius-xxl', data.radius.xxl + 'px');
  root.style.setProperty('--radius-xxxl', data.radius.xxxl + 'px');
  root.style.setProperty('--radius-button-s', data.radius.buttonS + 'px');
  root.style.setProperty('--radius-button-m', data.radius.buttonM + 'px');

  // Re-render dynamic content
  renderColors();
  renderRadius();
}

// Render colors
function renderColors() {
  const data = brandData[currentBrand];

  // Brand colors
  const brandContainer = document.getElementById('brand-colors');
  brandContainer.innerHTML = data.brand.map((color, i) => `
    <div class="color-item">
      <div class="color-swatch" style="background: ${color}"></div>
      <div class="color-info">
        <div class="color-name">Brand ${i + 1}</div>
        <div class="color-value">${color}</div>
      </div>
    </div>
  `).join('');

  // Gray colors
  const grayContainer = document.getElementById('gray-colors');
  grayContainer.innerHTML = data.gray.map((color, i) => `
    <div class="color-strip-item" style="background: ${color}; color: ${i < 6 ? '#232323' : '#FFFFFF'}">
      ${i}
    </div>
  `).join('');

  // Status colors
  const statusColors = [
    { name: 'Success', primary: '#36B44E', light: '#E8FFE8' },
    { name: 'Warning', primary: '#F6913D', light: '#FFF6E8' },
    { name: 'Danger', primary: '#E32428', light: '#FFEBE8' },
    { name: 'Info', primary: data.brand[5], light: data.brand[0] }
  ];
  const statusContainer = document.getElementById('status-colors');
  statusContainer.innerHTML = statusColors.map(c => `
    <div class="color-item">
      <div class="color-swatch" style="background: ${c.primary}"></div>
      <div class="color-info">
        <div class="color-name">${c.name}</div>
        <div class="color-value">${c.primary}</div>
      </div>
    </div>
  `).join('');

  // Support colors
  const supportContainer = document.getElementById('support-colors');
  supportContainer.innerHTML = [1, 2, 3, 4, 5, 6, 7].map(n => `
    <div class="support-row">
      <span class="support-label">Support ${n}</span>
      <div class="support-strip">
        <div class="color-swatch" style="background: ${data.brand[5]}"></div>
        <div class="color-swatch" style="background: ${data.brand[3]}"></div>
        <div class="color-swatch" style="background: ${data.brand[1]}"></div>
      </div>
    </div>
  `).join('');
}

// Render radius
function renderRadius() {
  const data = brandData[currentBrand];
  const container = document.getElementById('radius-showcase');

  const radiusItems = [
    { name: 'None', value: data.radius.none },
    { name: 'S', value: data.radius.s },
    { name: 'M', value: data.radius.m },
    { name: 'L', value: data.radius.l },
    { name: 'XL', value: data.radius.xl },
    { name: 'XXL', value: data.radius.xxl },
    { name: 'XXXL', value: data.radius.xxxl },
    { name: 'Full', value: data.radius.full }
  ];

  container.innerHTML = radiusItems.map(r => `
    <div class="radius-item">
      <div class="radius-box" style="border-radius: ${r.value}px"></div>
      <span class="radius-label">${r.name}</span>
      <span class="radius-value">${r.value}px</span>
    </div>
  `).join('');
}

// Render typography
function renderTypography() {
  const container = document.getElementById('typography-scale');
  const sizes = [
    { token: 'XS', cn: '10px', en: '11px', lh: '14px', use: '注释、徽标' },
    { token: 'S', cn: '12px', en: '13px', lh: '18px', use: '正文、标签' },
    { token: 'M', cn: '14px', en: '15px', lh: '20px', use: '正文' },
    { token: 'L', cn: '16px', en: '17px', lh: '24px', use: '标题' },
    { token: 'XL', cn: '18px', en: '19px', lh: '26px', use: '大标题' },
    { token: 'XXL', cn: '20px', en: '21px', lh: '28px', use: '特殊标题' },
    { token: 'XXXL', cn: '24px', en: '25px', lh: '34px', use: '数据展示' },
    { token: 'XXXXL', cn: '28px', en: '29px', lh: '40px', use: '数据展示' }
  ];

  container.innerHTML = sizes.map(s => `
    <div class="type-item">
      <span class="type-label">font/${s.token}</span>
      <span class="type-spec">${s.cn} / ${s.lh}</span>
      <span class="type-preview" style="font-size: ${s.cn}; line-height: ${s.lh}">
        示例文字 Sample Text 123
      </span>
    </div>
  `).join('');
}

// Render spacing
function renderSpacing() {
  const container = document.getElementById('spacing-scale');
  const spacings = [
    { level: 1, value: 2 },
    { level: 2, value: 4 },
    { level: 3, value: 8 },
    { level: 4, value: 12 },
    { level: 5, value: 16 },
    { level: 6, value: 20 },
    { level: 7, value: 24 },
    { level: 8, value: 32 }
  ];

  container.innerHTML = spacings.map(s => `
    <div class="spacing-item">
      <span class="spacing-label">spacing-${s.level}</span>
      <span class="spacing-value">${s.value}px</span>
      <div class="spacing-bar" style="width: ${s.value * 4}px"></div>
    </div>
  `).join('');
}

// Copy DESIGN.md
function copyDesignMD() {
  // Get DESIGN.md content
  fetch('../DESIGN.md')
    .then(res => res.text())
    .then(text => {
      navigator.clipboard.writeText(text).then(() => {
        showToast('已复制到剪贴板');
      });
    })
    .catch(() => {
      // Fallback: show modal with content
      showToast('请手动复制 DESIGN.md 文件');
    });
}

// Show toast
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
}
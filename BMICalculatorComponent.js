// js/BMICalculatorComponent.js

class BMICalculatorComponent extends HTMLElement {
  constructor() {
    super();

    // Создаем Shadow DOM
    const shadow = this.attachShadow({ mode: 'open' });

    // Создаем контейнер для компонента
    const container = document.createElement('div');
    container.classList.add('bmi-calculator-container');

    // Добавляем HTML-разметку компонента
    container.innerHTML = `
      <section class="calculate">
				<div class="calculate-inner">
					<div class="calculate-body">
						<h2
							class="calculate-title title-medium backdrop-title centered"
							data-title="BMI"
						>
							Input your BMI
						</h2>
						<div class="calculate-description">
							<p>
								Duo graece ponderum ne, ei mel aliquando. Pro te tamquam
								nonumes, nam no nemore epicurei
							</p>
						</div>
						<form class="calculate-form">
							<div class="calculate-form-body">
								<label class="visually-hidden" for="height">Height</label>
								<input
									class="calculate-input input"
									id="height"
									type="number"
									placeholder="Height / cm"
								/>

								<label class="visually-hidden" for="weight">Weight</label>
								<input
									class="calculate-input input"
									id="weight"
									type="number"
									placeholder="Weight / kg"
								/>

								<label class="visually-hidden" for="age">Age</label>
								<input
									class="calculate-input input"
									id="age"
									type="number"
									placeholder="Age"
								/>

								<label class="visually-hidden" for="gender">Gender</label>
								<select class="calculate-input input" id="gender" required>
									<option value="" disabled selected>Gender</option>
									<option value="male">Male</option>
									<option value="female">Female</option>
								</select>

								<label class="visually-hidden" for="activity-factor"
									>Activity factor</label
								>
								<select
									class="calculate-input input wide"
									id="activity-factor"
									required
								>
									<option value="" disabled selected>
										Select an activity factor
									</option>
									<option value="1">1</option>
									<option value="2">2</option>
								</select>
							</div>
							<button class="calculate-button button transparent" type="submit">
								Calculate
							</button>
						</form>
					</div>
					<div class="calculate-table-wrapper">
						<table class="calculate-table">
							<thead>
								<tr>
									<th>BMI</th>
									<th>Weight status</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Below 18.5</td>
									<td>Underweight</td>
								</tr>
								<tr>
									<td>18.5 - 24.9</td>
									<td>Healthy</td>
								</tr>
								<tr>
									<td>25.0 - 29.9</td>
									<td>Overweight</td>
								</tr>
								<tr>
									<td>30.0 - and Above</td>
									<td>Obese</td>
								</tr>
							</tbody>
							<tfoot>
								<tr>
									<td colspan="2">
										<b>BMR</b> Metabolic Rate / <b>BMI</b> Body Mass Index
									</td>
								</tr>
							</tfoot>
						</table>
					</div>
				</div>
			</section>
    `;

    // Подключаем Bootstrap CSS
    const bootstrapLink = document.createElement('link');
    bootstrapLink.rel = 'stylesheet';
    bootstrapLink.href = 'libs/bootstrap/css/bootstrap.min.css';
    shadow.appendChild(bootstrapLink);

    // Подключаем ваши собственные стили
    const stylesPath1 = 'styles/components/';
    const stylesPath2 = 'styles/';
    const styleFiles1 = [
      'banner.css',
      'burger_menu.css',
      'calculate.css',
      'family.css',
      'footer.css',
      'header.css',
      'join-us.css',
      'location.css',
      'motivation.css',
      'training-types.css',
    ];
    const styleFiles2 = [
			'adaptability.css',
			'fonts.css',
			'main.css',
			'reset.css',
      'variables.css',
    ];

    // Подключаем стили из первой директории
    styleFiles1.forEach(file => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = `${stylesPath1}${file}`;
      shadow.appendChild(link);
    });

    // Подключаем стили из второй директории
    styleFiles2.forEach(file => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = `${stylesPath2}${file}`;
      shadow.appendChild(link);
    });

    // Подключаем Bootstrap JS
    const bootstrapScript = document.createElement('script');
    bootstrapScript.src = 'libs/bootstrap/js/bootstrap.bundle.min.js';
    shadow.appendChild(bootstrapScript);

    // Добавляем контейнер в Shadow DOM
    shadow.appendChild(container);
    
		// Обработка формы
    const form = shadow.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const height = parseFloat(shadow.querySelector('#height').value) / 100;
      const weight = parseFloat(shadow.querySelector('#weight').value);

      if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert('Пожалуйста, введите корректные значения для роста и веса.');
        return;
      }

      const bmi = weight / (height * height);

      let weightStatus = '';
      if (bmi < 18.5) {
        weightStatus = 'Недостаточный вес';
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        weightStatus = 'Нормальный вес';
      } else if (bmi >= 25.0 && bmi <= 29.9) {
        weightStatus = 'Избыточный вес';
      } else {
        weightStatus = 'Ожирение';
      }

      alert(`BMI: ${bmi.toFixed(2)}\nКатегория веса: ${weightStatus}`);
    });

		    const inputs = shadow.querySelectorAll('.calculate-input');

    // Восстанавливаем значения из localStorage
    inputs.forEach(input => {
      const savedValue = localStorage.getItem(input.id);
      if (savedValue !== null) {
        input.value = savedValue;
      }

      // Сохраняем значения в localStorage при изменении
      input.addEventListener('input', () => {
        localStorage.setItem(input.id, input.value);
      });
    });


	}
}
customElements.define('bmi-calculator', BMICalculatorComponent);
(() => {
	const $ = document.querySelector.bind(document);

	let timeRotate = 7000;
	let currentRotate = 0;
	let isRotating = false;
	let currentIndex = 0;
	const wheel = $('.wheel');
	const btnWheel = $('.btn--wheel');
	const showMsg = $('.msg');
	const notificationBar = $('.notification-bar');

	const listGift = [
		{
			text: 'Hải',
		},
		{
			text: 'Hạnh',
		},
		{
			text: 'Khiêm',
		},
		{
			text: 'Nguyên',
		},
		{
			text: 'Bằng',
		},
		{
			text: 'Vỹ',
		},
		{
			text: 'Minh',
		},
		{
			text: 'Cường',
		},
	];

	const size = listGift.length;
	const rotate = 360 / size;
	const skewY = 90 - rotate;

	listGift.map((item, index) => {
		const elm = document.createElement('li');
		elm.style.transform = `rotate(${rotate * index}deg) skewY(-${skewY}deg)`;
		if (index % 2 == 0) {
			elm.innerHTML = `<p style="transform: skewY(${skewY}deg) rotate(${rotate / 2}deg);" class="text text-1">
			<b>${item.text}</b>
		</p>`;
		} else {
			elm.innerHTML = `<p style="transform: skewY(${skewY}deg) rotate(${rotate / 2}deg);" class="text text-2">
		<b>${item.text}</b>
		</p>`;
		}
		wheel.appendChild(elm);
	});

	const start = () => {
		showMsg.innerHTML = '';
		isRotating = true;
		const gift = listGift[currentIndex];
		currentRotate += 360 * 10;
		rotateWheel(currentRotate, currentIndex);
		showGift(gift);
		currentIndex = (currentIndex + 1) % size;
	};

	const rotateWheel = (currentRotate, index) => {
		$('.wheel').style.transform = `rotate(${currentRotate - index * rotate - rotate / 2}deg)`;
	};

	const showGift = gift => {
		let timer = setTimeout(() => {
			isRotating = false;
			notificationBar.innerHTML = `Chúc mừng bạn đã nhận được "${gift.text}"`;
			notificationBar.style.display = 'block';

			setTimeout(() => {
				notificationBar.style.display = 'none';
			}, 5000);

			clearTimeout(timer);
		}, timeRotate);
	};

	btnWheel.addEventListener('click', () => {
		!isRotating && start();
	});
})();

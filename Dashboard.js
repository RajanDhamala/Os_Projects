document.addEventListener('DOMContentLoaded', () => {
    const tests = [
        {
            id: 1,
            title: "Computer-Organization and Architecture MC on Basic Structure of Computer",
            date: "July 13, 2024",
            takenAt: "July 13, 2024",
            totalQuestions: 10,
            answers: 4,
            percentage: 90,
            attemptedQuestions: 10,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aliquid illo non pariatur ratione quos veniam harum esse eius placeat."
        },
        {
            id: 2,
            title: "Computer-Organization and Architecture MC on Advanced CPU Architecture",
            date: "August 2, 2024",
            takenAt: "August 2, 2024",
            totalQuestions: 15,
            answers: 10,
            percentage: 80,
            attemptedQuestions: 15,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aliquid illo non pariatur ratione quos veniam harum esse eius placeat."
        }
    ];

    const testListContainer = document.querySelector('#testList');

    function createTestItem(test, index) {
        const testItem = document.createElement('div');
        testItem.classList.add('mt-5', 'mx-3');

        const header = document.createElement('div');
        header.classList.add('cursor-pointer', 'flex', 'justify-between', 'bg-white', 'shadow-lg', 'rounded-t-md', 'px-4', 'py-3', 'hover:bg-blue-50');
        
        const title = document.createElement('h1');
        title.classList.add('md:text-xl', 'font-semibold', 'text-[16px]', 'text-blue-500');
        title.textContent = `${index + 1}. ${test.title} (Date: ${test.date})`;

        const toggleIcon = document.createElement('span');
        toggleIcon.classList.add('text-xl', 'font-bold', 'text-blue-500');
        toggleIcon.textContent = '↓';

        header.appendChild(title);
        header.appendChild(toggleIcon);
        testItem.appendChild(header);

        const details = document.createElement('div');
        details.classList.add('hidden', 'bg-white', 'rounded-b-md', 'px-4', 'py-3', 'border-t-2', 'shadow-lg');
        details.innerHTML = `
            <p><span class="font-bold text-gray-700">Taken At:</span> ${test.takenAt}</p>
            <p><span class="font-bold text-gray-700">Total Questions:</span> ${test.totalQuestions}</p>
            <p><span class="font-bold text-gray-700">Answers:</span> ${test.answers}</p>
            <p><span class="font-bold text-gray-700">Percentage:</span> ${test.percentage}%</p>
            <p><span class="font-bold text-gray-700">Attempted Questions:</span> ${test.attemptedQuestions}</p>
            <p class="mt-3 text-gray-700"><span class="font-bold break-words">Description:</span> ${test.description}</p>
   <div class="flex justify-center mt-2">
    <a href="https://google.com" target="_blank">
        <button class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md font-semibold antialiased hover:scale-105 transition duration-150">
            Go Take Test Again
        </button>
    </a>
</div>
        `;

        testItem.appendChild(details);
        testListContainer.appendChild(testItem);

        header.addEventListener('click', () => toggleDetails(details, toggleIcon));

        function toggleDetails(detailsElement, iconElement) {
            const isVisible = !detailsElement.classList.contains('hidden');
            
            const allDetails = document.querySelectorAll('#testList .hidden');
            allDetails.forEach(el => el.classList.add('hidden'));
            
            const allToggleIcons = document.querySelectorAll('#testList span.text-blue-500');
            allToggleIcons.forEach(icon => icon.textContent = '↓');
            
         
            detailsElement.classList.toggle('hidden', isVisible);
            iconElement.textContent = isVisible ? '↓' : '↑';
        }
    }

    tests.forEach((test, index) => createTestItem(test, index));
});



let userInfo = {
    name: 'Tinku Bahadur',
    email: 'tinku@example.com',
    phone: '123-456-7890',
    bio: 'Wannabe Full Stack Developer',
};


function openModal() {
    document.querySelector('.Editprofile').classList.add('bg-yellow-200')
    document.querySelector('#nameInput').value = userInfo.name;
    document.querySelector('#emailInput').value = userInfo.email;
    document.querySelector('#phoneInput').value = userInfo.phone;
    document.querySelector('#bioInput').value = userInfo.bio;
    document.querySelector('#modal').classList.remove('hidden');
    document.querySelector('.Editprofile').classList.add('bg-yellow-200')
}


function closeModal() {
    document.querySelector('.Editprofile').classList.remove('bg-yellow-200')
    document.querySelector('#modal').classList.add('hidden');
}


function saveProfile() {
    userInfo.name = document.querySelector('#nameInput').value;
    userInfo.email = document.querySelector('#emailInput').value;
    userInfo.phone = document.querySelector('#phoneInput').value;
    userInfo.bio = document.querySelector('#bioInput').value;

    document.querySelector('#userName').textContent = userInfo.name;
    document.querySelector('#userEmail').textContent = userInfo.email;
    document.querySelector('#userPhone').textContent = userInfo.phone;
    alert('UserProfile updated')
    closeModal();
}

function openChangePasswordModal() {
    document.querySelector('.Changepassword').classList.add('bg-yellow-200')
    document.querySelector('#changePasswordModal').classList.remove('hidden');
}

function closeChangePasswordModal() {
    document.querySelector('.Changepassword').classList.remove('bg-yellow-200')
    document.querySelector('#changePasswordModal').classList.add('hidden');
    document.querySelector('#currentPassword').value=''
    document.querySelector('#newPassword').value=''
    document.querySelector('#confirmPassword').value=''
    
}

function togglePasswordVisibility(inputId, button) {
    const input = document.getElementById(inputId);
    const icon = button.querySelector('i');
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}
function checkPassword() {
    const currentpasswd = document.querySelector('#currentPassword').value;
    const passwd = document.querySelector('#newPassword').value;
    const verifypasswd = document.querySelector('#confirmPassword').value;
   
    if (currentpasswd === '12') {
        if (passwd === '' || verifypasswd === '') {
            alert('Please enter both new password fields.');
            return;
        }
        if (passwd.length < 7 || verifypasswd.length < 7) {
            alert('Passwords must be at least 7 characters long.');
            return; 
        }
        if (passwd === verifypasswd) {
            alert('Password changed successfully!');
            closeChangePasswordModal(); 
        } else {
            alert('New passwords do not match.');
        }
    } else {
        alert('Current password is incorrect.');
    }
}

function toggleMenu() {
    var menu = document.querySelector('#mobileMenu');
    menu.classList.toggle('hidden');
  }
  

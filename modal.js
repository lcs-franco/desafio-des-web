document.getElementById('saveAddress')?.addEventListener('click', () => {
    const street = document.getElementById('street').value;
    const number = document.getElementById('number').value;
    const neighborhood = document.getElementById('neighborhood').value;
    const cep = document.getElementById('cep').value;
  
    if (street && number && neighborhood && cep) {
      console.log('Endereço salvo:', { street, number, neighborhood, cep });
  
      const modal = bootstrap.Modal.getInstance(document.getElementById('addressModal'));
      modal.hide();
  
      const addressList = document.querySelector('.list-group');
      const newItem = document.createElement('li');
      newItem.classList.add('list-group-item');
      newItem.textContent = `${street}, ${number} - ${neighborhood} (${cep})`;
      addressList.appendChild(newItem);
    } else {
      alert('Preencha todos os campos!');
    }
  });
  
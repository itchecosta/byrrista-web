<div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <BusinessForm onSubmit={handleAddBusiness} />
      </aside>

      <main>
        <ul>
          {business.map(business => (
            <BusinessItem key={business._id} business={business} />
          ))}
        </ul>
      </main>
    </div>
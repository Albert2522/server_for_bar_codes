@upcs.each do |upc|
    json.set! upc.id do
      json.extract! upc, :id, :product_name, :upc
    end
end

class CreateNames < ActiveRecord::Migration[6.0]
  def change
    create_table :names do |t|
      t.text :description
      t.references :user, null: false, foreign_key: true
      t.text :polyline
      t.float :distance
      t.float :elevation

      t.timestamps
    end
  end
end
